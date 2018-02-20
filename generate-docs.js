const path = require('path')
const fs = require('fs-extra')
const parseComments = require('comment-parser')

const GITHUB_SOURCE_URL = 'https://github.com/erquhart/tiny-fns/blob/master/index.js'
const RUNKIT_BASE_URL = 'https://runkit.com/erquhart'
const README_FILENAME = 'README.md'
const DOCS_HEADER = '## docs'

function readFile(relativePath) {
  return fs.readFile(path.resolve(relativePath), 'utf-8')
}

function parseCommentTags(tags) {
  return tags.reduce((acc, { name, description }) => {
    acc[name] = description
    return acc
  }, {})
}

function createGitHubSourceUrl(line, lineEnd) {
  return `${GITHUB_SOURCE_URL}#L${line}-L${lineEnd}`
}

function createRunkitUrl(name) {
  return `${RUNKIT_BASE_URL}/tiny-fns-${name}`
}

function createFunctionDoc(line, lineEnd, { name, description, exampleInput, exampleOutput }) {
  const gitHubSourceUrl = createGitHubSourceUrl(line, lineEnd)
  const runkitUrl = createRunkitUrl(name)
  return `
[**\`${name}\`**](${gitHubSourceUrl}) ([try it](${runkitUrl})
${description}

\`\`\`js
${exampleInput}

// -> ${exampleOutput}
\`\`\`
`
}

async function createDocsMarkdown() {
  const readme = await readFile('index.js')
  const lastLineNumber = readme.split('\n').length - 1
  const comments = parseComments(readme)
  comments.forEach((comment, idx, allComments) => {
    const nextComment = allComments[idx + 1]
    comment.line += 1
    comment.lineEnd = nextComment ? nextComment.line - 1 : lastLineNumber
  })

  return comments.map(({ line, lineEnd, tags }) => {
    return createFunctionDoc(line, lineEnd, parseCommentTags(tags))
  })
}

async function writeDocs() {
  const functionDocs = await createDocsMarkdown()
  const docsMarkdown = functionDocs.join('').trim()
  const readme = await readFile(README_FILENAME)
  const readmeTop = readme.split(DOCS_HEADER)[0].trim()
  const newReadme = `
${readmeTop}

${DOCS_HEADER}

${docsMarkdown}
`
  await fs.outputFile(path.resolve(README_FILENAME), newReadme.trim())
  console.log('Docs generation successful.')
}

writeDocs()
