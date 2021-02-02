import { Route, Redirect } from "react-router-dom";
import { useStore } from "store/store";

export default function PrivateRoute({ component, ...rest }) {
  const token = useStore((store) => store.token);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        token ? (
          component
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
