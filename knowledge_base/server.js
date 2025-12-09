const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const cors = require('cors');
const crypto = require('crypto');

const app = express();
const PORT = 8888;
const DATA_FILE = path.join(__dirname, 'knowledge_base.json');

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

// Generate unique ID
function generateId() {
  return crypto.randomUUID();
}

// Read knowledge base data and assign IDs if missing
async function readData() {
  try {
    const data = await fs.readFile(DATA_FILE, 'utf8');
    const entries = JSON.parse(data);
    let needsSave = false;
    
    // Assign IDs to entries that don't have one
    entries.forEach((entry, index) => {
      if (!entry.id) {
        entry.id = generateId();
        needsSave = true;
      }
    });
    
    // Save if any IDs were assigned
    if (needsSave) {
      await writeData(entries);
    }
    
    return entries;
  } catch (error) {
    console.error('Error reading data:', error);
    return [];
  }
}

// Write knowledge base data
async function writeData(data) {
  try {
    await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2) + '\n', 'utf8');
    return true;
  } catch (error) {
    console.error('Error writing data:', error);
    return false;
  }
}

// Get all entries
app.get('/api/entries', async (req, res) => {
  try {
    const category = req.query.category;
    const data = await readData();
    
    if (category && category !== 'all') {
      const filtered = data.filter(entry => entry.metadata?.category === category);
      res.json(filtered);
    } else {
      res.json(data);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all categories
app.get('/api/categories', async (req, res) => {
  try {
    const data = await readData();
    const categories = [...new Set(data.map(entry => entry.metadata?.category).filter(Boolean))].sort();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get single entry by index
app.get('/api/entries/:index', async (req, res) => {
  try {
    const data = await readData();
    const index = parseInt(req.params.index);
    
    if (index >= 0 && index < data.length) {
      res.json(data[index]);
    } else {
      res.status(404).json({ error: 'Entry not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create new entry
app.post('/api/entries', async (req, res) => {
  try {
    const data = await readData();
    const newEntry = {
      id: generateId(),
      question: req.body.question || '',
      answer: req.body.answer || '',
      metadata: {
        category: req.body.category || '',
        call_human: req.body.call_human === true || req.body.call_human === 'true'
      }
    };
    
    data.unshift(newEntry);
    const success = await writeData(data);
    
    if (success) {
      res.json({ success: true, entry: newEntry, index: 0 });
    } else {
      res.status(500).json({ error: 'Failed to save entry' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update entry
app.put('/api/entries/:index', async (req, res) => {
  try {
    const data = await readData();
    const index = parseInt(req.params.index);
    
    if (index >= 0 && index < data.length) {
      // Preserve existing ID
      const existingId = data[index].id || generateId();
      data[index] = {
        id: existingId,
        question: req.body.question || '',
        answer: req.body.answer || '',
        metadata: {
          category: req.body.category || '',
          call_human: req.body.call_human === true || req.body.call_human === 'true'
        }
      };
      
      const success = await writeData(data);
      
      if (success) {
        res.json({ success: true, entry: data[index] });
      } else {
        res.status(500).json({ error: 'Failed to save entry' });
      }
    } else {
      res.status(404).json({ error: 'Entry not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete entry
app.delete('/api/entries/:index', async (req, res) => {
  try {
    const data = await readData();
    const index = parseInt(req.params.index);
    
    if (index >= 0 && index < data.length) {
      data.splice(index, 1);
      const success = await writeData(data);
      
      if (success) {
        res.json({ success: true });
      } else {
        res.status(500).json({ error: 'Failed to delete entry' });
      }
    } else {
      res.status(404).json({ error: 'Entry not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Knowledge Base Editor running on http://localhost:${PORT}`);
});

