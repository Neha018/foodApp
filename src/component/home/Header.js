import React from 'react';
import {useState} from 'react';
import {
  HStack,
  Icon,
  Text,
  VStack,
  Modal,
  Flex,
  Box,
  Pressable,
  Spacer,
} from 'native-base';
import {
  MaterialIcons,
  EvilIcons,
  Ionicons,
  AntDesign,
} from '@native-base/icons';

export const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <Box>
      <Pressable onPress={() => setOpen(true)}>
        <VStack p="2">
          <Text
            fontSize="sm"
            color="#808080"
            fontFamily="body"
            fontWeight={600}
            fontStyle="normal">
            Delivering to
          </Text>
          <HStack alignItems="center" space={0.5}>
            <Text
              fontSize="sm"
              color="primary.500"
              fontFamily="body"
              fontWeight={600}
              fontStyle="normal">
              Fahad AI-Salem Street Qibla
            </Text>
            <Icon
              as={MaterialIcons}
              name="keyboard-arrow-down"
              color="primary.500"
            />
          </HStack>
        </VStack>
      </Pressable>
      <Modal isOpen={open} onClose={() => setOpen(false)} safeAreaTop={true}>
        <Modal.Content
          {...styles.bottom}
          borderTopLeftRadius="20"
          borderTopRightRadius="20"
          w="100%">
          <Modal.Body>
            <Box>
              <Text
                textAlign="center"
                fontSize="lg"
                color="#000"
                fontFamily="body"
                fontWeight={800}
                fontStyle="normal">
                Choose delivery location
              </Text>
              <Box>
                <HStack borderBottomWidth="1" borderColor="#cdcdcd" p="2">
                  <Flex direction="row" alignItems="center">
                    <Box mr="2">
                      <Icon
                        as={EvilIcons}
                        name="location"
                        color="#808080"
                        size={6}
                      />
                    </Box>
                    <Box>
                      <Text
                        fontSize="sm"
                        color="#000"
                        fontFamily="body"
                        fontWeight={700}
                        fontStyle="normal">
                        Home
                      </Text>
                      <Text
                        fontSize="sm"
                        color="#000"
                        fontFamily="body"
                        fontWeight={600}
                        fontStyle="normal">
                        Al-Shuhada St,Al Kuwayt
                      </Text>
                    </Box>
                  </Flex>
                </HStack>
              </Box>
              <Box>
                <HStack borderBottomWidth="1" borderColor="#cdcdcd" p="2">
                  <Flex direction="row" alignItems="center">
                    <Box mr="2">
                      <Icon
                        as={EvilIcons}
                        name="location"
                        color="#808080"
                        size={6}
                      />
                    </Box>
                    <Box>
                      <Text
                        fontSize="sm"
                        color="#000"
                        fontFamily="body"
                        fontWeight={700}
                        fontStyle="normal">
                        Apartment
                      </Text>
                      <Text
                        fontSize="sm"
                        color="#000"
                        fontFamily="body"
                        fontWeight={600}
                        fontStyle="normal">
                        Fahad Al-salem street, Qibla
                      </Text>
                    </Box>
                  </Flex>
                </HStack>
              </Box>
              <Box>
                <HStack borderBottomWidth="1" borderColor="#cdcdcd" p="2">
                  <Flex
                    direction="row"
                    alignItems="center"
                    w="100%"
                    justifyContent="space-between">
                    <Box>
                      <Flex direction="row" alignItems="center">
                        <Box mr="2">
                          <Icon
                            as={Ionicons}
                            name="md-locate"
                            color="#808080"
                            size={6}
                          />
                        </Box>
                        <Box>
                          <Text
                            fontSize="sm"
                            color="#000"
                            fontFamily="body"
                            fontWeight={700}
                            fontStyle="normal">
                            Delivery to Current Location
                          </Text>
                          <Text
                            fontSize="sm"
                            color="#000"
                            fontFamily="body"
                            fontWeight={600}
                            fontStyle="normal">
                            Fahad Al-salem street, Qibla
                          </Text>
                        </Box>
                      </Flex>
                    </Box>
                    <Spacer />
                    <Box mr="2">
                      <Icon
                        as={AntDesign}
                        name="checkcircle"
                        color="#d1141b"
                        size={4}
                      />
                    </Box>
                  </Flex>
                </HStack>
              </Box>
              <Box>
                <HStack p="2">
                  <Flex direction="row" alignItems="center">
                    <Box mr="2">
                      <Icon
                        as={Ionicons}
                        name="ios-pin-outline"
                        color="#808080"
                        size={6}
                      />
                    </Box>
                    <Box>
                      <Text
                        fontSize="sm"
                        color="#000"
                        fontFamily="body"
                        fontWeight={700}
                        fontStyle="normal">
                        Delivery to different location
                      </Text>
                      <Text
                        fontSize="sm"
                        color="#000"
                        fontFamily="body"
                        fontWeight={600}
                        fontStyle="normal">
                        Choose location on map
                      </Text>
                    </Box>
                  </Flex>
                </HStack>
              </Box>
            </Box>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </Box>
  );
};

const styles = {
  bottom: {
    marginBottom: 0,
    marginTop: 'auto',
  },
};
