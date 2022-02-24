import ModalCreate from "./createNew/modal-create";
import { useRouter } from "next/router";
import Link from "next/link";

const PageHeader = ({ title }) => {
  const router = useRouter();
  if (router.route === "/problem/index") {
    const display = "none";
  } else {
    const display = "";
  }
  return (
    <>
      <div className="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="min-w-0">
          <h1 className="inline-block py-1 text-lg font-medium text-gray-900 sm:truncate">
            {title}
            <Link href="/problem/createNew" passHref>
              <button
                type="button"
                className="mx-3 px-3 py-1 items-center border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                New
              </button>
            </Link>
            {/* <ModalCreate /> */}
          </h1>
        </div>
      </div>
    </>
  );
};

export default PageHeader;
