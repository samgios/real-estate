import { query } from "./_generated/server"

/**
 * Simple query to verify Convex is connected.
 * Use useQuery(api.health.ping) from the app to test.
 */
export const ping = query({
  args: {},
  handler: async () => {
    return { ok: true, time: Date.now() }
  },
})
