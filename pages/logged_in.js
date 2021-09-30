import { useEffect } from "react";
import { useRouter } from "next/router";
import { AuthUserProvider, useAuth } from "../context/AuthUserContext.";

import { Container, Row, Col, Button } from "reactstrap";

const LoggedIn = () => {
  const { authUser, loading, signOut } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (!loading && !authUser) router.push("/");
  }, [authUser, loading]);

  return (
    <Container>
      {loading ? (
        <Row>
          <Col>Loading....</Col>
        </Row>
      ) : (
        <>
          {authUser && (
            <Container>
              <Row>
                <Col>
                  {authUser && (
                    <div>
                      Congratulations {authUser?.email}! You are logged in.
                    </div>
                  )}
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button onClick={signOut}>Sign out</Button>
                </Col>
              </Row>
            </Container>
          )}
        </>
      )}
    </Container>
  );
};

export default LoggedIn;
