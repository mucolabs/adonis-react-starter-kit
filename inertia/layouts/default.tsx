import { toast, Toaster } from 'sonner'
import { ReactElement, useEffect } from 'react'
import { Data } from '~/generated/data'
import { Form, Link, usePage } from '@inertiajs/react'
import { Button, chakra, Container, Flex, Heading, HStack, Separator } from '@chakra-ui/react'
import { ColorModeButton } from '~/config/chakra/color-mode'

export default function Layout({ children }: { children: ReactElement<Data.SharedProps> }) {
  useEffect(() => {
    toast.dismiss()
  }, [usePage().url])

  if (children.props.flash.error) {
    toast.error(children.props.flash.error)
  }

  return (
    <Flex flexDir="column" minH="100vh" w="full">
      {/* Header */}
      {/* Main Content */}
      <Container maxW="breakpoint-md">
        <chakra.header
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          borderBottom="1px solid"
          borderColor="border.muted"
          py="6"
        >
          <Heading as="h1" size="md">
            <Link href="/">Acme.</Link>
          </Heading>

          <HStack gap="3">
            <Button size="sm" variant="ghost">
              Login
            </Button>
            <Button size="sm">Signup</Button>

            <Separator h="9" orientation="vertical" />
            <ColorModeButton size="sm" variant="subtle" />
          </HStack>
        </chakra.header>
      </Container>
      <chakra.main display="flex" h="full" flex="1">
        <Toaster position="top-center" richColors />
        {children}
      </chakra.main>
    </Flex>
  )
}
