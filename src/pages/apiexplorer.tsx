import React from 'react';
import Layout from '@theme/Layout';
import ApiExplorerFeatures from '../features/Apiexplorer';

export default function ApiExplorer() {
  return (
    <Layout title={'API Explorer'} description='Deriv API documentation'>
      <main>
        <ApiExplorerFeatures />
      </main>
    </Layout>
  );
}
