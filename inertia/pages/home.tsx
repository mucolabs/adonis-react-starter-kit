import {
  Container,
  Heading,
  Link,
  LinkBox,
  LinkOverlay,
  List,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react'

export default function Home() {
  return (
    <Container
      display="flex"
      flex="1"
      minH="full"
      maxW="breakpoint-md"
      flexDir="column"
      justifyContent="space-between"
    >
      <VStack as="main" flex="1" align="start" py="12" gap="12">
        <VStack align="start" gap="6">
          <Heading size="4xl" fontWeight="bold">
            Welcome to the Simplicity of the Modern Monolith with Inertia.js
          </Heading>
          <Text fontSize="lg">
            Build modern single-page applications without giving up the power and simplicity of
            classic server-side routing. This starter kit gives you a lightweight, production-ready
            foundation to move fast and stay focused.
          </Text>

          <Text>Preconfigured with:</Text>
          <List.Root pl="8" gap="2">
            <List.Item>Minimal authentication setup</List.Item>
            <List.Item>
              Production-ready{' '}
              <Link
                href="https://highperformancesqlite.com/articles/sqlite-recommended-pragmas"
                target="_blank"
                colorPalette="teal"
                variant="underline"
                fontWeight="bold"
              >
                SQLite defaults
              </Link>
            </List.Item>
            <List.Item>
              <Link
                href="https://www.chakra-ui.com/"
                target="_blank"
                variant="underline"
                fontWeight="bold"
                colorPalette="teal"
              >
                Chakra UI
              </Link>{' '}
              a consistent and accessible design system
            </List.Item>
            <List.Item>Ready-to-use Dockerfile for deployment</List.Item>
            <List.Item>
              Seamless hosting on{' '}
              <Link
                href="https://fly.io/"
                target="_blank"
                variant="underline"
                fontWeight="bold"
                colorPalette="pink"
              >
                Fly.io
              </Link>
            </List.Item>
            <List.Item>
              Fully replicated SQLite database powered by{' '}
              <Link
                href="https://litestream.io/"
                target="_blank"
                colorPalette="blue"
                variant="underline"
                fontWeight="bold"
              >
                Litestream
              </Link>
            </List.Item>

            <List.Item>
              <Link
                href="http://react.dev/learn/react-compiler/installation#"
                target="_blank"
                colorPalette="cyan"
                variant="underline"
                fontWeight="bold"
              >
                React Compiler
              </Link>{' '}
              for automatic component optimization
            </List.Item>
            <List.Item>
              <Link
                href="https://github.com/unjs/fontaine/tree/main/packages/fontless"
                target="_blank"
                colorPalette="gray"
                variant="underline"
                fontWeight="bold"
              >
                Fontless
              </Link>{' '}
              for automatic font optimization
            </List.Item>
            <List.Item>
              <Link
                href="https://eslint.org/"
                target="_blank"
                colorPalette="purple"
                variant="underline"
                fontWeight="bold"
              >
                ESLint
              </Link>{' '}
              and{' '}
              <Link
                href="https://eslint.org/"
                target="_blank"
                colorPalette="yellow"
                variant="underline"
                fontWeight="bold"
              >
                Prettier
              </Link>{' '}
              for clean, well-formatted code
            </List.Item>
          </List.Root>
        </VStack>
      </VStack>

      <SimpleGrid columns={{ base: 1, sm: 3 }} gap="8" as="footer" py="6">
        <LinkBox
          as="article"
          maxW="sm"
          rounded="md"
          borderWidth="1px"
          borderColor="border.muted"
          p="3"
          display="flex"
          flexDir="column"
          gap="3"
          _hover={{ borderColor: 'border' }}
        >
          <Heading size="sm">
            <LinkOverlay
              target="_blank"
              href="https://insiders.adonisjs.com/docs/v7-alpha/introduction"
            >
              Official Docs ›
            </LinkOverlay>
          </Heading>
          <Text fontSize="xs">
            Detailed documentation to help you get started and build efficiently with AdonisJS.
          </Text>
        </LinkBox>

        <LinkBox
          as="article"
          maxW="sm"
          rounded="md"
          borderWidth="1px"
          borderColor="border.muted"
          p="3"
          display="flex"
          flexDir="column"
          gap="3"
          _hover={{ borderColor: 'border' }}
        >
          <Heading size="sm">
            <LinkOverlay target="_blank" href="https://adocasts.com/">
              Adocasts ›
            </LinkOverlay>
          </Heading>
          <Text fontSize="xs">
            Practical video tutorials that guide you through everyday development scenarios.
          </Text>
        </LinkBox>
        <LinkBox
          as="article"
          maxW="sm"
          rounded="md"
          borderWidth="1px"
          borderColor="border.muted"
          p="3"
          display="flex"
          flexDir="column"
          gap="3"
          _hover={{ borderColor: 'border' }}
        >
          <Heading size="sm">
            <LinkOverlay target="_blank" href="https://discord.com/invite/vDcEjq6">
              Discord ›
            </LinkOverlay>
          </Heading>
          <Text fontSize="xs">
            Join the AdonisJS community and connect with developers creating exceptional projects
            every day.
          </Text>
        </LinkBox>
      </SimpleGrid>
    </Container>
  )
}
