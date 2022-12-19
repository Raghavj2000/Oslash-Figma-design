import { useState } from "react";
import { RadioGroup } from "@headlessui/react";

const plans = [
  {
    name: "shortlink",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "collection",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
      </svg>
    ),
  },
  {
    name: "snippet",
    icon: (
      <svg
        width="18"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.5624 3L6.33672 9.97256H3L6.22029 3H9.5624Z"
          fill="#111827"
        />
        <path
          d="M9.76747 9.97253L6.54717 16.9452H3.20506L6.42475 9.97253H9.76747Z"
          fill="#111827"
        />
        <path
          d="M15.2397 4.53856L11.1101 4.52849L10.8691 3.62952L14.9989 3.63959L15.2397 4.53856Z"
          fill="#111827"
        />
        <path
          d="M17.2857 6.89926L10.0084 6.88921L9.76749 5.99023L17.0449 6.00029L17.2857 6.89926Z"
          fill="#111827"
        />
        <path
          d="M16.184 9.25999L8.90667 9.24992L8.66579 8.35095L15.9431 8.36101L16.184 9.25999Z"
          fill="#111827"
        />
      </svg>
    ),
  },
];

export default function Example() {
  const [selected, setSelected] = useState(plans[0]);

  return (
    <>
      {/* <RadioGroup value={selected} onChange={setSelected}>
        <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>

        <div className="space-y-2 flex w-3 h-3 border-2">
            {plans.map((plan) => (
            <RadioGroup.Option
                key={plan.name}
                value={plan}
                className={({ active, checked }) =>
                `${
                    active
                    ? "ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300"
                    : ""
                }
                    ${checked ? "bg-sky-900 bg-opacity-75 text-white" : "bg-white"}
                        cursor-pointer rounded-lg px-4 py-4 shadow-md focus:outline-none`
                }
            >
                {({ active, checked }) => (
                <>
                    <div className="flex w-3 items-center justify-between h-3 ">
                    <div className="flex items-center">
                        <div className="text-sm">
                        <RadioGroup.Label
                            as="p"
                            className={`font-medium  ${
                            checked ? "text-white" : "text-gray-900"
                            }`}
                        >
                            {plan.name}
                        </RadioGroup.Label>
                        </div>
                    </div>
                    </div>
                </>
                )}
            </RadioGroup.Option>
            ))}
        </div>
        </RadioGroup> */}

      <RadioGroup value={selected} onChange={setSelected}>
        <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>

        <div className=" flex h-9 bg-white border border-gray-300  justify-center items-center rounded">
          {plans.map((plan) => (
            <RadioGroup.Option
              key={plan.name}
              value={plan}
              className={({ active, checked }) =>
                `${active ? "" : ""}
                  ${checked ? "bg-gray-200" : "bg-white hover:bg-gray-200"}
                  flex px-[8px] rounded py-[7.2px] cursor-pointer  focus:outline-none`
              }
            >
              {plan.icon}
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    </>
  );
}

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
