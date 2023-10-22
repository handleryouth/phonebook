import styled from "@emotion/styled";
import { Button, Flex, Paragraph } from "components";
import { Dialog } from "primereact/dialog";

import { DeleteModalProps } from "./ContactsType";

const StyledButton = styled(Button)`
  width: 100%;
`;

export default function DeleteModal({
  toggleCloseModal,
  visible,
  onConfirm,
}: DeleteModalProps) {
  return (
    <Dialog
      onHide={toggleCloseModal}
      header="Delete Contact"
      visible={visible}
      draggable={false}
      footer={
        <Flex alignItems="center">
          <StyledButton label="Cancel" onClick={toggleCloseModal} />
          <StyledButton
            label="Delete"
            backgroundcolor="blue"
            onClick={onConfirm}
          />
        </Flex>
      }
    >
      <Paragraph>Are you sure you want to delete this contact?</Paragraph>
    </Dialog>
  );
}
