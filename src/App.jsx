import { Suspense, useEffect } from "react";
import "@/assets/css/App.css";

import MyRoutes from "@/routes/MyRoutes";
import LoadingSpinner from "@/components/loadingSpinner";

import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { useSocketActions } from "@/stores/socketStore";
import socketIOClient from "socket.io-client";
import { BrowserRouter } from "react-router-dom";

function App() {
  const client = new QueryClient();
  const { setSocket } = useSocketActions();
  useEffect(() => {
    const webSocket = socketIOClient("http://192.168.219.204:8093/");
    setSocket(webSocket);

    return () => {
      webSocket.close();
    };
  }, []);

  return (
    // <ContextSocketPriovider>
    <QueryClientProvider client={client}>
      <ReactQueryDevtools initialIsOpen={true} />
      <Suspense fallback={<LoadingSpinner />}>
        {/* Router setting */}

        <MyRoutes />
      </Suspense>
    </QueryClientProvider>
    // </ContextSocketPriovider>
  );
}

export default App;
