import React from 'react'
import {
  Divider,
  Text,
  Flex,
  Box,
  Stack,
  FormControl,
  Input,
  Select,
  Textarea,
  Grid,
  Button,
  Spacer,
} from '@chakra-ui/react'
import { Icon } from '@iconify/react'
import { Formik, Form, Field, ErrorMessage } from 'formik'

const CreatePropertyForm = () => {
  function validateInput(values) {
    console.log(JSON.stringify(values, null, 2))
  }
  function onSubmitReview(props) {}
  function onAutoSaving(props) {}
  function onPreview(props) {}
  return (
    <Box>
      <Formik
        validate={(values) => validateInput(values)}
        initialValues={{
          title: '',
          priceValue: '',
          priceCurrency: '',
          priceDuration: '',
          location: '',
          description: '',
          amenity1: '',
          amenity2: '',
          amenity3: '',
          amenity4: '',
          coreFeature1: '',
          coreFeature2: '',
          photo: undefined,
        }}
      >
        {(props) => (
          <Box>
            <Form>
              <Text textStyle="headline-2">List your property</Text>
              <Box my="40px">
                <Field name="photo">
                  {({ field, form }) => (
                    <FormControl>
                      <Text textStyle="body-2-bold">Upload photos</Text>
                      <Text textStyle="caption-2" color="neutrals.4">
                        Drag or choose your file to upload
                      </Text>
                      <Flex
                        my="16px"
                        justify="center"
                        align="center"
                        position="relative"
                        bg="neutrals.7"
                        borderRadius="16px"
                        cursor="pointer"
                      >
                        <Input
                          position="relative"
                          zIndex="1"
                          {...field}
                          h="182px"
                          p="64px 8px"
                          borderRadius="16px"
                          cursor="pointer"
                          opacity="0"
                          type="file"
                          accept="image/png, image/jpeg, image/gif"
                        />
                        <Box
                          position="absolute"
                          top="50%"
                          transform="translateY(-50%)"
                        >
                          <Stack justify="center" align="center" spacing="11px">
                            <Icon fontSize="20px" icon="la:file-upload" />
                            <Text textStyle="caption-2" color="neutrals.4">
                              {props.values.photo ||
                                'PNG, GIF, JPEG Max 500Mb.'}
                            </Text>
                          </Stack>
                        </Box>
                      </Flex>
                    </FormControl>
                  )}
                </Field>
              </Box>
              <Stack spacing="48px">
                <Stack spacing={{ base: '16px', tablet: '24px' }}>
                  <Text textStyle="body-2-bold">Property details</Text>
                  <Box>
                    <Field name="title">
                      {({ field, form }) => (
                        <FormControl>
                          <Stack spacing="12px">
                            <Text textStyle="hairline-2" color="neutrals.4">
                              TITLE
                            </Text>
                            <Input
                              {...field}
                              h="48px"
                              borderRadius="12px"
                              type="text"
                              textStyle="caption-bold"
                              p="12px 16px"
                              placeholder="e. g. ”Spectacular views of Queenstown”"
                            />
                          </Stack>
                        </FormControl>
                      )}
                    </Field>
                  </Box>
                  <Box>
                    <Stack spacing="12px">
                      <Text textStyle="hairline-2" color="neutrals.4">
                        PRICE
                      </Text>
                      <Flex borderColor="neutrals.6">
                        <Field name="priceValue">
                          {({ field, form }) => (
                            <FormControl>
                              <Input
                                {...field}
                                h="48px"
                                borderLeftRadius="12px"
                                type="number"
                                textStyle="caption-bold"
                                placeholder="e. g. 180"
                                borderRightRadius="unset"
                              />
                            </FormControl>
                          )}
                        </Field>
                        <Field name="priceCurrency">
                          {({ field, form }) => (
                            <Select
                              id="selectCurrency"
                              variant="outline"
                              placeholder="Select Currency"
                              borderRadius="unset"
                              h="48px"
                              {...field}
                            >
                              <option>USD</option>
                              <option>VND</option>
                            </Select>
                          )}
                        </Field>
                        <Field name="priceDuration">
                          {({ field, form }) => (
                            <Select
                              borderLeftRadius="unset"
                              borderRightRadius="12px"
                              id="selectDurationUnit"
                              variant="outline"
                              placeholder="Select Duration Unit"
                              h="48px"
                              {...field}
                            >
                              <option>per Night</option>
                              <option>per Day</option>
                            </Select>
                          )}
                        </Field>
                      </Flex>
                    </Stack>
                  </Box>
                  <Box>
                    <Field name="location">
                      {({ field, form }) => (
                        <FormControl>
                          <Stack spacing="12px">
                            <Text textStyle="hairline-2" color="neutrals.4">
                              LOCATION
                            </Text>
                            <Input
                              {...field}
                              h="48px"
                              borderRadius="12px"
                              type="text"
                              textStyle="caption-bold"
                              p="12px 16px"
                              placeholder="e. g. “Queenstown, Otago, New Zealand”"
                            />
                          </Stack>
                        </FormControl>
                      )}
                    </Field>
                  </Box>
                  <Box>
                    <Field name="description">
                      {({ field, form }) => (
                        <FormControl>
                          <Stack spacing="12px">
                            <Text textStyle="hairline-2" color="neutrals.4">
                              DESCRIPTION
                            </Text>
                            <Textarea
                              {...field}
                              h="140px"
                              borderRadius="12px"
                              textStyle="caption-bold"
                              p="12px 16px"
                              placeholder="e. g. “Spectacular views of Queenstown”"
                            />
                          </Stack>
                        </FormControl>
                      )}
                    </Field>
                  </Box>
                </Stack>
                <Box>
                  <Text textStyle="body-2-bold">Amenities</Text>
                  <Grid
                    templateRows={{
                      base: 'repeat(4, 1fr)',
                      tablet: 'repeat(2, 1fr)',
                    }}
                    templateColumns={{
                      base: 'unset',
                      tablet: 'repeat(2, 1fr)',
                    }}
                    gap="20px"
                    mt={{ base: '16px', tablet: '24px' }}
                  >
                    <Field name="amenity1">
                      {({ field, form }) => (
                        <FormControl>
                          <Input
                            {...field}
                            h="48px"
                            borderRadius="12px"
                            type="text"
                            textStyle="caption-bold"
                            placeholder="e. g. Wifi 24/7"
                          />
                        </FormControl>
                      )}
                    </Field>
                    <Field name="amenity2">
                      {({ field, form }) => (
                        <FormControl>
                          <Input
                            {...field}
                            h="48px"
                            borderRadius="12px"
                            type="text"
                            textStyle="caption-bold"
                            placeholder="e. g. Wifi 24/7"
                          />
                        </FormControl>
                      )}
                    </Field>
                    <Field name="amenity3">
                      {({ field, form }) => (
                        <FormControl>
                          <Input
                            {...field}
                            h="48px"
                            borderRadius="12px"
                            type="text"
                            textStyle="caption-bold"
                            placeholder="e. g. Wifi 24/7"
                          />
                        </FormControl>
                      )}
                    </Field>
                    <Field name="amenity4">
                      {({ field, form }) => (
                        <FormControl>
                          <Input
                            {...field}
                            h="48px"
                            borderRadius="12px"
                            type="text"
                            textStyle="caption-bold"
                            placeholder="e. g. Wifi 24/7"
                          />
                        </FormControl>
                      )}
                    </Field>
                  </Grid>
                </Box>
                <Box>
                  <Text textStyle="body-2-bold">Core features</Text>
                  <Grid
                    templateColumns={{ base: 'none', tablet: 'repeat(2, 1fr)' }}
                    templateRows={{ base: 'repeat(2, 1fr)', tablet: 'none' }}
                    gap="20px"
                    mt={{ base: '16px', tablet: '24px' }}
                  >
                    <Field name="coreFeature1">
                      {({ field, form }) => (
                        <FormControl>
                          <Input
                            {...field}
                            h="48px"
                            borderRadius="12px"
                            type="text"
                            textStyle="caption-bold"
                            placeholder="e. g. Wifi 24/7"
                          />
                        </FormControl>
                      )}
                    </Field>
                    <Field name="coreFeature2">
                      {({ field, form }) => (
                        <FormControl>
                          <Input
                            {...field}
                            h="48px"
                            borderRadius="12px"
                            type="text"
                            textStyle="caption-bold"
                            placeholder="e. g. Wifi 24/7"
                          />
                        </FormControl>
                      )}
                    </Field>
                  </Grid>
                </Box>
              </Stack>
              <Divider my="40px" w="100%" />
              <Stack
                align="center"
                direction={{ base: 'column', tablet: 'row' }}
              >
                <Stack
                  w={{ base: '100%', tablet: 'fit-content' }}
                  align="center"
                  direction={{ base: 'column', tablet: 'row' }}
                  spacing="16px"
                >
                  <Button
                    h="48px"
                    w={{ base: '100%', tablet: '212px' }}
                    rightIcon={<Icon icon="akar-icons:arrow-right" />}
                    textStyle="button-1"
                    color="neutrals.8"
                    bg="primary.1"
                    onClick={onSubmitReview(props)}
                  >
                    Submit for review
                  </Button>
                  <Button
                    h="48px"
                    w={{ base: '100%', tablet: '109px' }}
                    textStyle="button-1"
                    colorScheme="gray"
                    variant="outline"
                    onClick={onPreview(props)}
                    display={{ base: 'block', desktop: 'none' }}
                  >
                    Preview
                  </Button>
                </Stack>
                <Spacer />
                <Button
                  h="48px"
                  w={{ base: '100%', tablet: '167px' }}
                  rightIcon={<Icon icon="icon-park-outline:loading-one" />}
                  textStyle="button-1"
                  colorScheme="gray"
                  variant="outline"
                  onClick={onAutoSaving(props)}
                >
                  Auto saving
                </Button>
              </Stack>
            </Form>
          </Box>
        )}
      </Formik>
    </Box>
  )
}

export default CreatePropertyForm
