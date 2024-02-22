import { useCallback, useEffect } from "react";
// import { GetServerSideProps } from "next";
// import { getSession } from "@frontegg/nextjs/pages";
import { useAuth, AdminPortal, useAuthActions, useTenantsState } from "@frontegg/nextjs";

import { useRouter } from "next/router";

export default function MyPage({ products }) {
  const { requestHostedLoginAuthorizeV2 } = useAuthActions()
  const { user } = useAuth();

  const router = useRouter();

  const { tenants } = useTenantsState();
  const { switchTenant} = useAuthActions();

  const logout = useCallback(() => {
    router.replace("/account/logout");
  }, [router]);

  const handleClick = () => {
    AdminPortal.show();
  };

  useEffect(() => {    requestHostedLoginAuthorizeV2({shouldRedirectToLogin: false})
  }, [requestHostedLoginAuthorizeV2])

  const switchTenantFromDropdown =(e) => {
    const selectedIndex = e.target.selectedIndex
    const newTenantId = tenants[selectedIndex].tenantId
    const newTenantName = tenants[selectedIndex].name
    console.log(`\n\n----\nSelected index:\n${selectedIndex}\n\nTenant name:\n${newTenantName}\n\nTenant ID:\n${newTenantId}`)
    switchTenant({ tenantId: newTenantId });
  }

  return (
    <div>
      <h1>My Page</h1>
      {products}
      <div>
        <img src={user?.profilePictureUrl} alt={user?.name} />
      </div>
      <div>
        <span>Logged in as: {user?.name}</span>
      </div>
      <div>
        <button onClick={handleClick}>Settings</button>
      </div>
      <div>
        <button onClick={logout}>Log out</button>
      </div>

      <select className="tenant-selector" onChange={switchTenantFromDropdown}>
        {tenants.map((option, index) => (
          <option key={index} value={option.name} selected={option.tenantId === user.tenantId}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}

// In the `getServerSideProps` method you can get data from an external service to pull relevant data for a logged in user.
// we used the prop `products`. See the commented code for an example.

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const session = await getSession(context.req);
//   if (session) {
//     const { data } = await fetch('{external}/product', {
//       headers: {
//         Authorization: 'bearer ' + session.accessToken,
//       },
//     });
//     return { props: { products: data } };
//   }

//   return { props: { products: [] } };
// };
