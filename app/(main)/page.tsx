import Available from "@/components/Available";
import Hero from "@/components/hero";
import { getAccount, getAccounts } from "@/lib/actions/bank.actions";
import { getLoggedInUser } from "@/lib/actions/user.actions";



const Home =async({ searchParams: { id, page } }: SearchParamProps)=> {
  return (
    <>
      <Hero />
      <Available/>
    </>
  )
}

export default Home;