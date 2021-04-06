import React from 'react';
import { Button } from '@material-ui/core';

import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout title="Youtube Clone">
      Clone youtube
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </Layout>
  );
}
