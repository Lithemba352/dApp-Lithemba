import { Disclosure } from "@headlessui/react";
import { useEffect, useState } from "react";
import { useConnect } from "wagmi";
import { injected } from "wagmi/connectors";
import { ConnectButton } from "@rainbow-me/rainbowkit"; // Import ConnectButton

export default function Header() {
  const [hideConnectBtn, setHideConnectBtn] = useState(false);
  const { connect } = useConnect();

  useEffect(() => {
    if (window.ethereum && window.ethereum.isMiniPay) {
      setHideConnectBtn(true);
      connect({ connector: injected({ target: "metaMask" }) });
    }
  }, []);

  return (
    <Disclosure as="nav" className="">
      <>
        <div className="">
          <div className="">
            <div className="">
              {!hideConnectBtn && (
                <div className="your-custom-class">
                  <ConnectButton
                    showBalance={{
                      smallScreen: true,
                      largeScreen: false,
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    </Disclosure>
  );
}
