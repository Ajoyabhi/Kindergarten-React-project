// HelmetComponent.js
import React from 'react';
import { Helmet } from 'react-helmet';

const HelmetComponent = () => (
  <Helmet>
    <meta charSet="utf-8" />
    <title>Kider - Preschool Website Template</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="keywords" content="" />
    <meta name="description" content="" />
    <link rel="icon" href="img/favicon.ico" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
    <link
      href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600&family=Inter:wght@600&family=Lobster+Two:wght@700&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
      rel="stylesheet"
    />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
      rel="stylesheet"
    />
    <link href="./../lib/animate/animate.min.css" rel="stylesheet" />
    <link href="./../lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
    <link href="./../css/bootstrap.min.css" rel="stylesheet" />
    <link href="./../css/style.css" rel="stylesheet" />
  </Helmet>
);

export default HelmetComponent;
