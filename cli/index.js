#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const https = require('https');

const API_BASE = 'https://aura-ui.vercel.app/api';

async function fetchJSON(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(new Error('Invalid JSON'));
        }
      });
    }).on('error', reject);
  });
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

async function install(componentName) {
  console.log(`\n📦 Installing ${componentName}...\n`);

  try {
    // Fetch component from API
    const component = await fetchJSON(`${API_BASE}/components/${componentName}`);
    
    if (component.error) {
      console.error(`❌ Component "${componentName}" not found.`);
      console.log('\nAvailable components:');
      const list = await fetchJSON(`${API_BASE}/components`);
      list.forEach(c => console.log(`  - ${c.slug}`));
      process.exit(1);
    }

    // Create components directory
    const componentsDir = path.join(process.cwd(), 'src', 'components', 'aura');
    ensureDir(componentsDir);

    // Write files
    for (const file of component.files) {
      const filePath = path.join(componentsDir, file.name);
      fs.writeFileSync(filePath, file.content);
      console.log(`  ✅ Created ${file.name}`);
    }

    // Check for dependencies
    if (component.dependencies && component.dependencies.length > 0) {
      console.log(`\n📦 Dependencies needed: ${component.dependencies.join(', ')}`);
      console.log(`   Run: npm install ${component.dependencies.join(' ')}`);
    }

    console.log(`\n✨ ${component.name} installed successfully!`);
    console.log(`\nImport it in your project:`);
    console.log(`  import { ${component.name} } from "@/components/aura/${component.files[0].name.replace('.tsx', '')}"`);

  } catch (error) {
    console.error(`❌ Failed to install: ${error.message}`);
    process.exit(1);
  }
}

async function listComponents() {
  console.log('\n📋 Available Aura UI components:\n');
  
  try {
    const components = await fetchJSON(`${API_BASE}/components`);
    components.forEach(c => {
      console.log(`  ${c.slug.padEnd(25)} ${c.category}`);
    });
    console.log(`\n  Total: ${components.length} components`);
  } catch (error) {
    console.error('❌ Failed to fetch components list');
  }
}

// CLI
const [,, command, ...args] = process.argv;

async function main() {
  switch (command) {
    case 'add':
      if (!args[0]) {
        console.error('❌ Please specify a component name');
        console.log('   Usage: npx aura-ui add <component-name>');
        process.exit(1);
      }
      await install(args[0]);
      break;
    
    case 'list':
      await listComponents();
      break;
    
    default:
      console.log(`
Aura UI - Components + Templates for AI-Assisted Developers

Usage:
  npx aura-ui add <component>    Install a component
  npx aura-ui list               List all components

Examples:
  npx aura-ui add hero-gradient
  npx aura-ui add pricing-3col
  npx aura-ui list
      `);
  }
}

main();
