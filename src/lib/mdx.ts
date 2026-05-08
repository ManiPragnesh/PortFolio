import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const notesDirectory = path.join(process.cwd(), 'src/content/notes');

export function getNoteSlugs() {
  if (!fs.existsSync(notesDirectory)) return [];
  return fs.readdirSync(notesDirectory);
}

export function getNoteBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = path.join(notesDirectory, `${realSlug}.mdx`);
  
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug: realSlug,
    meta: data,
    content,
  };
}

export function getAllNotes() {
  const slugs = getNoteSlugs();
  const notes = slugs
    .map((slug) => getNoteBySlug(slug))
    .filter(Boolean)
    // sort notes by date in descending order
    .sort((note1, note2) => (note1!.meta.date > note2!.meta.date ? -1 : 1));
  return notes;
}
