"use client";
import React, { useEffect } from "react";
import { useCountries } from "use-react-countries";
import {
  Input,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";

const PhoneNumber = ({ props }) => {
  const { countries } = useCountries();
  const defaultCountryIndex = 50;
  const [country, setCountry] = React.useState(defaultCountryIndex);
  const {
    name: selectedCountryName,
    flags,
    countryCallingCode,
  } = countries[country];

  // Ülke değiştiğinde state'i güncelle
  const handleCountryChange = (index) => {
    setCountry(index);
    // Ülke kodu ve ismini prop'a ile
    props.setCountry(
      countries[index].name + countries[index].countryCallingCode
    );
  };

  // Varsayılan ülke ismini ve kodunu prop'a gönder
  useEffect(() => {
    props.setCountry(selectedCountryName + countryCallingCode);
  }, [selectedCountryName, countryCallingCode, props.setCountry]);

  return (
    <div className="relative flex w-full">
      <Menu placement="bottom-start">
        <MenuHandler>
          <Button
            ripple={false}
            variant="text"
            color="blue-gray"
            className="flex h-10 items-center gap-2 rounded-r-none border border-r-0 border-blue-gray-200 bg-blue-gray-500/10 pl-3"
          >
            <img
              src={flags.svg}
              alt={selectedCountryName}
              className="h-4 w-4 rounded-full object-cover"
            />
            {countryCallingCode}
          </Button>
        </MenuHandler>
        <MenuList className="max-h-[20rem] max-w-[18rem]">
          {countries.map(({ name, flags, countryCallingCode }, index) => {
            return (
              <MenuItem
                key={name}
                value={name}
                className="flex items-center gap-2"
                onClick={() => handleCountryChange(index)}
              >
                <img
                  src={flags.svg}
                  alt={name}
                  className="h-5 w-5 rounded-full object-cover"
                />
                {name} <span className="ml-auto">{countryCallingCode}</span>
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
      <Input
        value={props.value}
        onChange={(e) => props.setValue(e.target.value)}
        type="tel"
        name="phone"
        required={props.required}
        placeholder="Telefon Numarası"
        className="rounded-l-none !border-t-blue-gray-200 focus:!border-t-gray-900"
        labelProps={{
          className: "before:content-none after:content-none",
        }}
        containerProps={{
          className: "min-w-0",
        }}
      />
    </div>
  );
};

export default PhoneNumber;
