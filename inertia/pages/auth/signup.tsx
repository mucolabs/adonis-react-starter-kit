import { Form, Link } from '@inertiajs/react'
import { Box, Button, chakra, Container, Heading, Input, VStack } from '@chakra-ui/react'

import { Field } from '~/components/chakra/field'
import { PasswordInput } from '~/components/chakra/password_input'

export default function Signup() {
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
          <Heading size="2xl">Create Account</Heading>
          <chakra.p fontSize="sm" color="fg.muted">
            Don&apos;t have an account?{' '}
            <Box
              asChild
              color="colorPalette.solid"
              _hover={{ color: 'colorPalette.solid', textDecor: 'underline' }}
            >
              <Link href="/login" prefetch>
                Log in
              </Link>
            </Box>
          </chakra.p>
        </VStack>

        <Form disableWhileProcessing method="POST" action="/signup" style={{ width: '100%' }}>
          {({ errors, processing }) => {
            return (
              <VStack gap="6">
                <Field label="Full Name">
                  <Input size="sm" name="fullName" placeholder="John Doe" />
                </Field>

                <Field
                  required
                  label="Email Address"
                  invalid={Boolean(errors.email)}
                  errorText={errors.email}
                >
                  <Input size="sm" type="email" name="email" placeholder="name@example.com" />
                </Field>

                <Field
                  required
                  label="Password"
                  invalid={Boolean(errors.password)}
                  errorText={errors.password}
                >
                  <PasswordInput
                    size="sm"
                    name="password"
                    autoComplete="new-password"
                    placeholder="Password"
                  />
                </Field>

                <Field
                  required
                  label="Confirm Password"
                  invalid={Boolean(errors.passwordConfirmation)}
                  errorText={errors.passwordConfirmation}
                >
                  <PasswordInput
                    size="sm"
                    name="passwordConfirmation"
                    autoComplete="new-password"
                    placeholder="Password"
                  />
                </Field>

                <Button size="sm" w="full" type="submit" mt="8" loading={processing}>
                  Sign up
                </Button>
              </VStack>
            )
          }}
        </Form>
      </VStack>
    </Container>
  )
}
