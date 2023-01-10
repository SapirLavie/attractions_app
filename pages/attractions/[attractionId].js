import { useRouter } from "next/router";

const AttractPage = () => {

    const router = useRouter();
    const attractionId = router.query.attractionId;
    return (
        <h1> The attrcation Page</h1>
    )
}
export default AttractPage;