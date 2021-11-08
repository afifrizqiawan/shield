import Head from "next/head"
import Layout from "../../components/layout"
import PageHeader from "../../components/problems/page-header"
import CreateForm from "../../components/problems/createNew/create-form"

export const getServerSideProps = async () => {
  // const resApps = await fetch("http://127.0.0.1:3030/v1/probman/apps/all")
  const resIncidents = await fetch(
    "http://127.0.0.1:3030/v1/probman/incident/all"
  )
  // const dataApps = await resApps.json()
  const dataIncidents = await resIncidents.json()
  return {
    props: {
      datas: null,
      // apps: dataApps,
      incidents: dataIncidents,
    },
  }
}

export default function CreateNew({ incidents }) {
  return (
    <>
      <Layout key="LayoutCreateNew">
        <Head>
          <title>Create New Problem</title>
        </Head>
        <section>
          <PageHeader title="Create New Problem" />

          <div className="hidden mt-8 sm:block">
            <div className="align-middle px-4 pb-4 sm:px-6 lg:px-8 border-b border-gray-200">
              <CreateForm incidents={incidents} />
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}
