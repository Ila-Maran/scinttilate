import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  Button,
} from "@chakra-ui/react";
import Character_Details from "./Character_Details";

export default function Overlay({
  isOpen,
  onOpen,
  onClose,
  btnRef,
  people,
  addToFavorites,
  favorites,
}) {
  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size={"20%"}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <Character_Details
            people={people}
            addToFavorites={addToFavorites}
            favorites={favorites}
          />

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
