import { useState, useEffect } from "react";
import settingslogo from "../assets/settingslogo.svg";
import Modal from "react-modal";
import { BLOOD_STATUSES, HOUSES, SPECIES } from "../constants/constants";
import { useFilters } from "../hooks/useFilters";
import { useSearchParams } from "react-router-dom";

const FiltersButton = () => {
  const [showModal, setShowModal] = useState(false);
  const [house, setHouse] = useState("");
  const [bloodStatus, setBloodStatus] = useState("");
  const [species, setSpecies] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const { setFilters } = useFilters(house, bloodStatus, species);

  Modal.setAppElement("#root");

  useEffect(() => {
    setHouse(searchParams.get("house") ?? "");
    setBloodStatus(searchParams.get("blood_status") ?? "");
    setSpecies(searchParams.get("species") ?? "");
  }, [searchParams, showModal]);

  const removeFilters = () => {
    setHouse("");
    setBloodStatus("");
    setSpecies("");
    setSearchParams({});
  };

  return (
    <div>
      <button
        className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold rounded-md"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <img src={settingslogo} alt="Filters" className="p-1 w-8 h-8" />
      </button>
      <Modal
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        contentLabel="Filters"
        className="relative flex flex-col justify-center items-center bg-dun rounded-lg shadow-md p-4 w-96"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      >
        <button
          className="absolute top-2 right-2 text-hpdarkbrown font-bold text-2xl"
          type="button"
          onClick={() => setShowModal(false)}
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-4 text-hpdarkbrown">Filters</h2>
        <div>
          <label
            htmlFor="house"
            className="block mb-2 font-bold text-hpdarkbrown"
          >
            House
          </label>
          <select
            id="house"
            value={house}
            onChange={(e) => setHouse(e.target.value)}
            className="block w-full p-2 rounded-md border border-yellow-600"
          >
            <option value="">Select House</option>
            {HOUSES.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="bloodStatus"
            className="block mb-2 font-bold text-hpdarkbrown"
          >
            Blood Status
          </label>
          <select
            id="bloodStatus"
            value={bloodStatus}
            onChange={(e) => setBloodStatus(e.target.value)}
            className="block w-full p-2 rounded-md border border-yellow-600"
          >
            <option value="">Select Blood Status</option>
            {BLOOD_STATUSES.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="species"
            className="block mb-2 font-bold text-hpdarkbrown"
          >
            Species
          </label>
          <select
            id="species"
            value={species}
            onChange={(e) => setSpecies(e.target.value)}
            className="block w-full p-2 rounded-md border border-yellow-600"
          >
            <option value="">Select Species</option>
            {SPECIES.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="flex justify-between w-full">
          <button
            className="bg-yellow-600 hover:bg-yellow-500 text-hpdarkbrown font-bold rounded-md p-2 mt-4"
            type="button"
            onClick={removeFilters}
          >
            Remove Filters
          </button>

          <button
            className="bg-yellow-600 hover:bg-yellow-500 text-hpdarkbrown font-bold rounded-md p-2 mt-4"
            type="button"
            onClick={() => {
              console.log(bloodStatus);
              setFilters(house, bloodStatus, species);
              setShowModal(false);
            }}
          >
            Apply
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default FiltersButton;
