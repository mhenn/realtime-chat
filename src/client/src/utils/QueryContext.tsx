import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export const QueryContext = (props: any) => {
    return (
        <QueryClientProvider client={queryClient}> {props}
        </QueryClientProvider>
    )
}
