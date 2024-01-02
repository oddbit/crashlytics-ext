/**
 * Environment configuration settings and variables
 * This class abstracts the source of getting the values and provides helpful
 * error/exceptions if trying to access a variable in a context where it is not
 * defined. This solves the issue of otherwise the value just being undefined.
 *
 * Please note that this means that you should not access any environment
 * variables using `process.env.VARIABLE`.
 */
export class EnvConfig {
  /**
   * Get flag for whether the functions are running in emulator or not.
   * This can be derived by checking the existence of any emulator provided
   * variables.
   */
  static get isEmulated(): boolean {
    return !!process.env.FIREBASE_EMULATOR_HUB;
  }

  /**
   * Project ID
   * Derive it by checking any existence of the multiple environment variables
   * that are declared by Google.
   */
  static get projectId(): string {
    const projectId = process.env.PROJECT_ID;

    if (!projectId) {
      throw new Error("Could not find project ID in any variable");
    }

    return projectId;
  }

  /**
   * Get language for webhooks
   */
  static get language(): string {
    return EnvConfig.getEnv("LANGUAGE");
  }

  /**
   * Get cloud functions location
   */
  static get location(): string {
    return EnvConfig.getEnv("LOCATION");
  }

  /**
   * Get all webhooks as an array
   */
  static get webhooks(): string[] {
    return [
      process.env.WEBHOOK_MANDATORY,
      process.env.WEBHOOK_OPTIONAL,
    ].filter((x) => !!x) as string[];
  }

  /**
   * Get Google Gemeni API key
   */
  static get apiKeyGemeni(): string | undefined {
    return process.env.API_KEY_GEMENI;
  }


  /**
   * Get an environment variable's value
   *
   * @param {string} key Name of environment variable
   * @return {string} Environment variable value
   */
  private static getEnv(key: string): string {
    const value: string | undefined = process.env[key];
    if (!value) {
      throw new Error(`Missing required config key: ${key}`);
    }

    return value;
  }
}
