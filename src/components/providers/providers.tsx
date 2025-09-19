"use client";

import React from 'react'

interface Props {
    children: React.ReactNode;
}

const Providers = ({ children }: Props) => {

    const client = new QueryClient();

    return (
        <QueryClientProvider client={client}>
            <ClerkProvider>
                {children}
            </ClerkProvider>
        </QueryClientProvider>
    )
};

export default Providers
