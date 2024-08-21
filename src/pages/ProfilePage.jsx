import React, { useEffect, useState } from "react";

const xmlFilePath = "/user-data.xml";
const xsltFilePath = "/user-data.xsl";

const ProfilePage = () => {
  const [htmlContent, setHtmlContent] = useState(null);
  const [validationErrors, setValidationErrors] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch XML data
        const xmlResponse = await fetch(xmlFilePath);
        const xmlString = await xmlResponse.text();

        // Fetch XSLT data
        const xsltResponse = await fetch(xsltFilePath);
        const xsltString = await xsltResponse.text();
        const xslt = new DOMParser().parseFromString(
          xsltString,
          "application/xml"
        );

        // Apply XSLT transformation
        const xml = new DOMParser().parseFromString(
          xmlString,
          "application/xml"
        );
        const xsltProcessor = new XSLTProcessor();
        xsltProcessor.importStylesheet(xslt);
        const resultDocument = xsltProcessor.transformToFragment(xml, document);

        // Serialize the result document to HTML
        const serializer = new XMLSerializer();
        const htmlString = serializer.serializeToString(resultDocument);
        setHtmlContent(htmlString);

        // Validate XML
        const validationResponse = await fetch("/validate-xml", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ xml: xmlString }),
        });
        const validationResult = await validationResponse.json();
        if (validationResponse.ok) {
          setValidationErrors(null);
        } else {
          setValidationErrors(validationResult.errors);
        }
      } catch (error) {
        console.error("Failed to fetch or transform XML/XSL", error);
      }
    };

    fetchData();
  }, []);

  if (validationErrors) {
    return (
      <div className="bg-black h-[50vh] p-4 mt-16 text-white">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-4">Validation Errors</h1>
          <ul>
            {validationErrors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  if (!htmlContent) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className="bg-black min-h-[85.6vh] p-4 mt-16 text-white"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
};

export default ProfilePage;
