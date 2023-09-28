import type { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
	webServer: {
		command: "pnpm preview",
		port: 4173,
	},
	testDir: "tests/integration",
	testMatch: /(.+\.)?test\.ts/,
};

export default config;
