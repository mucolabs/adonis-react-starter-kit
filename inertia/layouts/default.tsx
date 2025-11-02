import { useEffect } from 'react'
import { toast, Toaster } from 'sonner'
import type { ReactElement } from 'react'
import { Link, router, usePage } from '@inertiajs/react'
import {
  Button,
  chakra,
  Container,
  Flex,
  Heading,
  HStack,
  Menu,
  Portal,
  Separator,
  Span,
  Strong,
  VStack,
} from '@chakra-ui/react'

import type { Data } from '~/generated/data'
import { Avatar } from '~/components/chakra/avatar'
import { ColorModeButton } from '~/config/chakra/color-mode'

export default function Layout({ children }: { children: ReactElement<Data.SharedProps> }) {
  console.log(children.props)

  const url = usePage().url

  useEffect(() => {
    toast.dismiss()
  }, [url])

  if (children.props.flash?.error) {
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
            {children.props.user ? (
              <Menu.Root
                onSelect={({ value }) => {
                  if (value === 'logout') {
                    router.post('/logout')
                  }
                }}
              >
                <Menu.Trigger rounded="full" focusRing="outside">
                  <Avatar size="sm" name={children.props.user.fullName ?? ''} />
                </Menu.Trigger>
                <Portal>
                  <Menu.Positioner>
                    <Menu.Content>
                      <VStack gap={0} align="start" p="1">
                        <Strong fontSize="sm">{children.props.user.fullName}</Strong>
                        <Span fontSize="xs">{children.props.user.email}</Span>
                      </VStack>
                      <Menu.Separator />
                      <Menu.Item
                        value="logout"
                        color="fg.error"
                        _hover={{ bg: 'bg.error', color: 'fg.error' }}
                      >
                        Logout
                      </Menu.Item>
                    </Menu.Content>
                  </Menu.Positioner>
                </Portal>
              </Menu.Root>
            ) : (
              <>
                <Button size="sm" variant="ghost" asChild>
                  <Link prefetch href="/login">
                    Login
                  </Link>
                </Button>
                <Button size="sm" asChild>
                  <Link prefetch href="/signup">
                    Signup
                  </Link>
                </Button>
              </>
            )}

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
