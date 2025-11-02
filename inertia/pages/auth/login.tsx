import { Form, Link } from '@inertiajs/react'
import { Box, Button, chakra, Container, Heading, Input, VStack } from '@chakra-ui/react'

import { Field } from '~/components/chakra/field'
import { PasswordInput } from '~/components/chakra/password_input'

export default function LoginPage() {
  return (
    <Container
      maxW="breakpoint-sm"
      flex="1"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDir="column"
    >
      <VStack gap="10" w="full">
        <VStack align="start" w="full">
          <Heading size="2xl">Log in to your account</Heading>
          <chakra.p fontSize="sm" color="fg.muted">
            Already have an account?{' '}
            <Box
              asChild
              color="colorPalette.solid"
              _hover={{ color: 'colorPalette.solid', textDecor: 'underline' }}
            >
              <Link href="/signup" prefetch>
                Sign up
              </Link>
            </Box>
          </chakra.p>
        </VStack>

        <Form disableWhileProcessing method="POST" action="/login" style={{ width: '100%' }}>
          {({ errors, processing }) => {
            return (
              <VStack gap="6">
                <Field
                  required
                  label="Email Address"
                  invalid={Boolean(errors.email)}
                  errorText={errors.email}
                >
                  <Input size="sm" type="email" name="email" placeholder="name@example.com" />
                </Field>

                <Field required label="Password">
                  <PasswordInput
                    size="sm"
                    name="password"
                    autoComplete="current-password"
                    placeholder="Password"
                  />
                </Field>

                <Button size="sm" w="full" type="submit" mt="8" loading={processing}>
                  Log in
                </Button>
              </VStack>
            )
          }}
        </Form>
      </VStack>
    </Container>
  )
}
