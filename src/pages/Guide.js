import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { twilight } from 'react-syntax-highlighter/dist/esm/styles/prism'

import { markdown } from '../guides/ThemeHowTo'
import { chakra, useColorModeValue } from '@chakra-ui/system'
import { Box } from '@chakra-ui/react'

export const Guide = () => (
  <Box
    fontSize='14px'
    sx={{
      h1: {
        fontSize: '2em',
        fontWeight: '600',
        my: '1em',
        lineHeight: '1.25',
      },
      h2: {
        fontSize: '1.5em',
        fontWeight: 'semibold',
        my: '0.8em',
      },
      h3: {
        fontSize: '1.25em',
        fontWeight: 'semibold',
        my: '0.8em',
      },
      'h1, h2': {
        borderBottomWidth: '1px',
        borderBottomStyle: 'solid',
        borderBottomColor: '#ebedef',
      },
      ol: {
        pl: '2em',
        listStyleType: 'decimal',
        display: 'block',
        marginBlockStart: '1em',
        marginBlockEnd: '1em',
        marginInlineStart: '0px',
        marginInlineEnd: '0px',
        paddingInlineStart: '2.8em',
      },
      'pre, code': {
        borderRadius: '6px',
        fontSize: '90%',
        lineHeight: '1.45',
        overflow: 'auto',
        my: '1em',
      },
      a: {
        fontWeight: 'semibold',
        color: useColorModeValue('teal.500', 'teal.200'),
      },
    }}
  >
    <ReactMarkdown
      remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
      components={{
        code({ node, inline, className, children, ...codeProps }) {
          const match = /language-(\w+)/.exec(className || '')
          return !inline && match ? (
            <SyntaxHighlighter
              children={String(children).replace(/\n$/, '')}
              language={match[1]}
              style={twilight}
              {...codeProps}
            />
          ) : (
            <chakra.code
              bg={useColorModeValue('gray.200', 'gray.600')}
              px='0.3rem'
              py='0.1rem'
              fontFamily='mono'
              fontSize='1em'
              borderRadius='5px'
              {...codeProps}
            >
              {children}
            </chakra.code>
          )
        },
      }}
    >
      {markdown}
    </ReactMarkdown>
  </Box>
)
