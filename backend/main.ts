Deno.serve({ port: Number(Deno.env.get("PORT")) }, (req) => {
    return new Response("Hello from PocketBase Cloud!");
});
