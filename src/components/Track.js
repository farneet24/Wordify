import { useEffect } from "react";

function MyComponent() {
  useEffect(() => {
    async function sendVitals() {
      try {
        const response = await fetch("https://api.vercel.com/v1/vitals", {
          method: "POST",
          headers: {
            Authorization: "Bearer <TOKEN>",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            dsn: "prj_bfsxvuDmxrxpDOlIMcRFSPDx1hMw",
            event_name: "TTFB",
            href: "*.vercel.app/blog/my-post",
            id: "v2-1653884637156-8014753073557",
            page: "/blog/[slug]",
            speed: "4g",
            value: "60.20000000298023",
          }),
        });
        if (!response.ok) {
          throw new Error("Failed to send Vitals data");
        }
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }
    sendVitals();
  }, []);

  // Render your component here
  return <div>My Component</div>;
}
