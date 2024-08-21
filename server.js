const express = require('express');
const fs = require('fs');
const { XMLValidator, XMLSchema } = require('libxmljs2');

const app = express();
app.use(express.json({ limit: '10mb' })); // Adjust the limit as needed

// Load the XSD schema
let xsdSchema;
try {
  xsdSchema = fs.readFileSync('./public/user-data.xsd', 'utf8');
} catch (err) {
  console.error('Error reading XSD file:', err);
  process.exit(1); // Exit the process if XSD file cannot be loaded
}

app.post('/validate-xml', (req, res) => {
  const xmlData = req.body.xml; // Assume XML data is sent in the request body

  if (!xmlData) {
    return res.status(400).json({ error: 'No XML data provided' });
  }

  try {
    const xsd = XMLSchema.parse(xsdSchema);
    const xml = XMLValidator.parse(xmlData);
    
    const validationErrors = XMLValidator.validate(xml, xsd);

    if (validationErrors.length > 0) {
      res.status(400).json({ errors: validationErrors });
    } else {
      res.status(200).json({ message: 'XML is valid' });
    }
  } catch (error) {
    console.error('Error during validation:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
