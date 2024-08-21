<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" indent="yes"/>
  
  <xsl:template match="/">
    <html>
      <head>
        <title>User Profile</title>
        <style>
          body { font-family: Arial, sans-serif; background-color: #000; color: #fff; margin-left: 170px; }
          h1 { font-size: 24px; font-weight: bold; }
          h2 { font-size: 20px; margin-top: 20px; text-decoration: underline; }
          p { margin: 5px 0; }
          ul { list-style: none; padding: 0; }
          li { margin: 5px 0; }
        </style>
      </head>
      <body>
        <h1>User Profile</h1>
        <h2>Personal Details</h2>
        <p><strong>Name:</strong> <xsl:value-of select="User/Name"/></p>
        <p><strong>Email:</strong> <xsl:value-of select="User/Email"/></p>
        <p><strong>Age:</strong> <xsl:value-of select="User/Age"/></p>
        
        <h2>Address</h2>
        <p><strong>Street:</strong> <xsl:value-of select="User/Address/Street"/></p>
        <p><strong>City:</strong> <xsl:value-of select="User/Address/City"/></p>
        <p><strong>State:</strong> <xsl:value-of select="User/Address/State"/></p>
        <p><strong>Zip Code:</strong> <xsl:value-of select="User/Address/ZipCode"/></p>
        
        <h2>Itineraries</h2>
        <ul>
          <xsl:for-each select="User/Itineraries/Itinerary">
            <li><strong>Destination:</strong> <xsl:value-of select="Destination"/> - <strong>Date:</strong> <xsl:value-of select="Date"/></li>
          </xsl:for-each>
        </ul>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
