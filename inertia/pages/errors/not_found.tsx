import { Link } from '@inertiajs/react'
import { LuMoveLeft } from 'react-icons/lu'
import {
  Button,
  Container,
  Flex,
  Heading,
  Link as ChakraLink,
  Text,
  VStack,
} from '@chakra-ui/react'

export default function NotFound() {
  return (
    <Flex minH="100vh" minW="100vw" justify="center" alignItems="center">
      <Container maxW="breakpoint-md">
        <VStack gap="8">
          <Heading size="7xl">404</Heading>
          <div>
            <Text textAlign="center">
              We&apos;re sorry, but the page you&apos;re looking for doesn&apos;t exist.
            </Text>
            <Text textAlign="center" color="fg.subtle">
              It might have been moved, or you might need to{' '}
              <ChakraLink colorPalette="brand">
                <Link href="/signin" as={Link}>
                  sign in
                </Link>
              </ChakraLink>
              .
            </Text>
          </div>
          <Button variant="subtle" asChild>
            <Link href="/" prefetch>
              <LuMoveLeft />
              Return Home
            </Link>
          </Button>
        </VStack>
      </Container>
    </Flex>
  )
}
