"use server";

const getAuthStatus = async () => {

    if (!user?.id || !user?.primaryEmailAddress?.emailAddress) {
        return { error: "User not found" };
    }

    let clerkId = user.id;

    const existingUser = await db.user.findFirst({
        where: {
            clerkId,
        },
    });

    console.log("existingUser", existingUser);

    if (!existingUser) {
        await db.user.create({
            data: {
                clerkId,
                email: user.primaryEmailAddress.emailAddress,
                name: user.fullName || user.firstName,
                image: user.imageUrl,
            },
        });
    }

    return { success: true };
};

export default getAuthStatus;
