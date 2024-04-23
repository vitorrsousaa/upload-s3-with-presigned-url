import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import { Browser } from "./router/browser";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: Number.POSITIVE_INFINITY, // Always stale
			refetchInterval: 1000 * 60 * 45, // 45 minutes
			retry: false,
			refetchOnWindowFocus: false,
			gcTime: 1000 * 60 * 60 * 1, // 1 hours
		},
	},
});

function App() {
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<Browser />

				<Toaster />
				<ReactQueryDevtools />
			</QueryClientProvider>
		</>
	);
}

export default App;
