import fs from 'fs-extra';
import path from 'path';
import crypto from 'crypto';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkHtml from 'remark-html';

const postsDir = path.join(process.cwd(), 'src/posts');
const outputDir = path.join(process.cwd(), 'src/assets/posts');
const dataDir = path.join(process.cwd(), 'src/assets/data');

// Ensure output directories exist
fs.ensureDirSync(outputDir);
fs.ensureDirSync(dataDir);

// Static data
const stats = [
  { number: "99.9%", label: "Uptime" },
  { number: "24/7", label: "Monitoring" },
  { number: "500+", label: "Clients Protected" },
  { number: "0", label: "Security Breaches" }
];

const news = [
  {
    date: '2024-03-15',
    title: 'New AI-Powered Threat Detection System Released',
    excerpt: 'Our latest cybersecurity solution leverages advanced AI to identify and neutralize threats in real-time.',
    category: 'Product Update'
  },
  {
    date: '2024-03-10',
    title: 'CyberGuard Recognized as Industry Leader',
    excerpt: 'Leading security firms acknowledge CyberGuard\'s innovative approach to cybersecurity.',
    category: 'Company News'
  },
  {
    date: '2024-03-05',
    title: 'Protecting Against Emerging Cyber Threats',
    excerpt: 'Learn about the latest cybersecurity threats and how to protect your organization.',
    category: 'Security Advisory'
  }
];

const services = [
  {
    icon: 'Shield',
    title: "Threat Detection",
    description: "Advanced AI-powered systems to identify and neutralize cyber threats in real-time"
  },
  {
    icon: 'Lock',
    title: "Data Encryption",
    description: "Military-grade encryption protocols to secure your sensitive information"
  },
  {
    icon: 'Server',
    title: "Network Security",
    description: "Comprehensive network protection against unauthorized access and attacks"
  },
  {
    icon: 'Cpu',
    title: "System Hardening",
    description: "Robust security measures to strengthen your infrastructure against vulnerabilities"
  }
];

const processMarkdown = async () => {
  const files = await fs.readdir(postsDir);
  const indexData = [];

  for (const file of files) {
    if (file.endsWith('.md')) {
      const filePath = path.join(postsDir, file);
      const slug = file.replace('.md', '');
      console.log(`Processing file: ${filePath}`);

      const content = await fs.readFile(filePath, 'utf-8');
      const processedContent = await unified()
        .use(remarkParse)
        .use(remarkHtml)
        .process(content);

      const hash = crypto.createHash('md5').update(processedContent.toString()).digest('hex').slice(0, 8);
      const hashedFileName = `${slug}-${hash}.json`;

      console.log(`Hash for ${slug}: ${hash}`);

      const jsonContent = {
        slug: slug,
        html: processedContent.toString(),
      };

      await fs.writeJson(path.join(outputDir, hashedFileName), jsonContent);
      console.log(`Written to: ${path.join(outputDir, hashedFileName)}`);

      indexData.push({
        slug: slug,
        fileName: hashedFileName,
      });
    }
  }

  // Write all static data
  await fs.writeJson(path.join(outputDir, 'index.json'), indexData);
  await fs.writeJson(path.join(dataDir, 'stats.json'), stats);
  await fs.writeJson(path.join(dataDir, 'news.json'), news);
  await fs.writeJson(path.join(dataDir, 'services.json'), services);

  console.log('All static data files written successfully.');
};

const run = async () => {
  try {
    await processMarkdown();
    console.log('Prebuild script completed successfully.');
  } catch (err) {
    console.error('Error during prebuild process:', err);
    process.exit(1);
  }
};

run();