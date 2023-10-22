import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";

async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> {
  await addCucumberPreprocessorPlugin(on, config);
  on('task', {
    log(message) {
      console.log(message);
      return null;
    },
  });
  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin(config)],
    })
  );

  return config;
}

export default defineConfig({
  env: {
    ELECTRON_EXTRA_LAUNCH_ARGS: "--disable-gpu"
  },
  chromeWebSecurity: false,
  retries: {
    runMode: 4,
    openMode: 4,
  },
  e2e: {
    baseUrl: "https://google.es",
    viewportWidth: 1920,
    viewportHeight: 1080,
    specPattern: "**/*.feature",
    setupNodeEvents,
  },
});
