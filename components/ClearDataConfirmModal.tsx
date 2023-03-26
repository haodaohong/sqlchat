import { toast } from "react-hot-toast";
import Icon from "./Icon";

interface Props {
  close: () => void;
}

const ClearDataConfirmModal = (props: Props) => {
  const { close } = props;

  const handleClearData = () => {
    window.localStorage.clear();
    toast.success("Message cleared. The page will be reloaded.");
    setTimeout(() => {
      window.location.reload();
    }, 300);
  };

  return (
    <div className="modal modal-middle modal-open">
      <div className="modal-box relative">
        <h3 className="font-bold text-lg">Clear all data</h3>
        <button className="btn btn-sm btn-circle absolute right-4 top-4" onClick={close}>
          <Icon.IoMdClose className="w-5 h-auto" />
        </button>
        <div className="w-full flex flex-col justify-start items-start space-y-3 pt-4">
          <p className="text-gray-500">SQLChat saves all of your data in localstorage. Please be sure to clear data.</p>
        </div>
        <div className="modal-action">
          <button className="btn btn-outline" onClick={close}>
            Close
          </button>
          <button className="btn btn-error" onClick={handleClearData}>
            Clear data
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClearDataConfirmModal;
