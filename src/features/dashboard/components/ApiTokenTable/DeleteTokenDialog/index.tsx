import React, { useMemo, useCallback } from 'react';
import { Modal } from '@deriv/ui';
import { TModalActionButton } from '@deriv/ui/dist/types/src/components/core/modal/types';

type TDeleteTokendialog = {
  setToggleModal: React.Dispatch<React.SetStateAction<boolean>>;
  onDelete: () => void;
};

const DeleteTokenDialog = ({ onDelete, setToggleModal }: TDeleteTokendialog) => {
  const onOpenChange = useCallback(
    (open: boolean) => {
      if (!open) {
        setToggleModal(false);
      }
    },
    [setToggleModal],
  );

  const actionButtons: TModalActionButton[] = useMemo(
    () => [
      {
        id: 0,
        text: 'Yes, delete',
        color: 'primary',
        onClick: () => {
          setToggleModal(false);
          onDelete();
        },
      },
      {
        id: 1,
        text: 'No, keep it',
        color: 'secondary',
        onClick: () => {
          setToggleModal(false);
        },
      },
    ],
    [setToggleModal],
  );

  return (
    <Modal defaultOpen onOpenChange={onOpenChange}>
      <Modal.Portal>
        <div className='modal-overlay'>
          <Modal.Overlay />
          <Modal.DialogContent
            title='Deleting token'
            content='Are you sure you want to delete this token?'
            action_buttons={actionButtons}
            has_close_button
          />
        </div>
      </Modal.Portal>
    </Modal>
  );
};

export default DeleteTokenDialog;
