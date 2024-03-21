/* eslint-disable react/prop-types */
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function GenderCheckBox({ onCheckboxChange, selectedGender }) {
  return (
    <div className="flex gap-3">
      <div className="flex items-center gap-3">
        <Label
          className={`cursor-pointer ${
            selectedGender === "male" ? "selected" : ""
          }`}
        >
          Male
        </Label>
        <Input
          type="checkbox"
          checked={selectedGender === "male"}
          onChange={() => onCheckboxChange("male")}
        />
      </div>
      <div className="flex items-center gap-3">
        <Label
          className={`cursor-pointer ${
            selectedGender === "female" ? "selected" : ""
          }`}
        >
          Female
        </Label>
        <Input
          type="checkbox"
          checked={selectedGender === "female"}
          onChange={() => onCheckboxChange("female")}
        />
      </div>
    </div>
  );
}
