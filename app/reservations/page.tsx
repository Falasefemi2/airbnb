import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";

import getCurrentUser from "../actions/getCurrentUser";
import getReservations from "../actions/getReservations";

const ReservationPage = async () => {
    const currentUser = await getCurrentUser();

    if (!currentUser) {

        return (
            <ClientOnly>
                <EmptyState
                    title="Unauthorized"
                    subTitle="Please Login"
                />
            </ClientOnly>
        );
    }

    const reservations = await getReservations({
        authorId: currentUser.id
    });

    if (reservations.length === 0) {
        <ClientOnly>
            <EmptyState
                title="No reservations found"
                subTitle="Looks like you have no reservations on your properties!"
            />
        </ClientOnly>
    }
}

export default ReservationPage;