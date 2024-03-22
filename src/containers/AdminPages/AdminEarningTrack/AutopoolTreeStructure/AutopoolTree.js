import React from "react";
import userIcon from "../../../../assets/tree_icon.png";

const AutopoolTree = ({ userAutopooldata,handleAutopoolTreeClick }) => {
  // console.log(userAutopooldata);
  const AutoPoolUser = (props) => {
    return (
      <a href="#" onClick={(e) => handleAutopoolName(e, props)}>
        <img src={userIcon} alt="userIcon" />
        <span>{props?.name}</span>
      </a>
    );
  };

  const handleAutopoolName = (e, name) => {
    e.stopPropagation();
    // console.log(name);
    handleAutopoolTreeClick(name?.name);
  };
  return (
    <>
      {userAutopooldata?.autopool ? (
        <div className="autopool_row">
          <p style={{ textAlign: "start" }}>
            Autopool : {userAutopooldata?.autopool}
          </p>
          <div className="autopool_tree">
            <ul>
              <li>
                {" "}
                <AutoPoolUser name={userAutopooldata?.user_id} />
                {userAutopooldata?.child?.length > 0 && (
                  <ul>
                    {userAutopooldata?.child[0]?.level === 1 && (
                      <li>
                        <AutoPoolUser name={userAutopooldata?.child[0]?.user_id} />
                        {userAutopooldata?.child[0]?.child?.length > 0 && (
                          <ul>
                            {userAutopooldata?.child[0]?.child[0]?.level ===
                              2 && (
                              <li>
                                {" "}
                                <AutoPoolUser
                                  name={
                                    userAutopooldata?.child[0]?.child[0]?.user_id
                                  }
                                />
                              </li>
                            )}
                            {userAutopooldata?.child[0]?.child[1]?.level ===
                              2 && (
                              <li>
                                <AutoPoolUser
                                  name={
                                    userAutopooldata?.child[0]?.child[1]?.user_id
                                  }
                                />
                              </li>
                            )}
                            {userAutopooldata?.child[0]?.child[2]?.level ===
                              2 && (
                              <li>
                                <AutoPoolUser
                                  name={
                                    userAutopooldata?.child[0]?.child[2]?.user_id
                                  }
                                />
                              </li>
                            )}
                          </ul>
                        )}
                      </li>
                    )}
                    {userAutopooldata?.child[1]?.level === 1 && (
                      <li>
                        <AutoPoolUser name={userAutopooldata?.child[1]?.user_id} />
                        {userAutopooldata?.child[1]?.child?.length > 0 && (
                          <ul>
                            {userAutopooldata?.child[1]?.child[0]?.level ===
                              2 && (
                              <li>
                                {" "}
                                <AutoPoolUser
                                  name={
                                    userAutopooldata?.child[1]?.child[0]?.user_id
                                  }
                                />
                              </li>
                            )}
                            {userAutopooldata?.child[1]?.child[1]?.level ===
                              2 && (
                              <li>
                                <AutoPoolUser
                                  name={
                                    userAutopooldata?.child[1]?.child[1]?.user_id
                                  }
                                />
                              </li>
                            )}
                            {userAutopooldata?.child[1]?.child[2]?.level ===
                              2 && (
                              <li>
                                <AutoPoolUser
                                  name={
                                    userAutopooldata?.child[1]?.child[2]?.user_id
                                  }
                                />
                              </li>
                            )}
                          </ul>
                        )}
                      </li>
                    )}
                    {userAutopooldata?.child[2]?.level === 1 && (
                      <li>
                        <AutoPoolUser name={userAutopooldata?.child[2]?.user_id} />
                        {userAutopooldata?.child[2]?.child?.length > 0 && (
                          <ul>
                            {userAutopooldata?.child[2]?.child[0]?.level ===
                              2 && (
                              <li>
                                {" "}
                                <AutoPoolUser
                                  name={
                                    userAutopooldata?.child[2]?.child[0]?.user_id
                                  }
                                />
                              </li>
                            )}
                            {userAutopooldata?.child[2]?.child[1]?.level ===
                              2 && (
                              <li>
                                <AutoPoolUser
                                  name={
                                    userAutopooldata?.child[2]?.child[1]?.user_id
                                  }
                                />
                              </li>
                            )}
                            {userAutopooldata?.child[2]?.child[2]?.level ===
                              2 && (
                              <li>
                                <AutoPoolUser
                                  name={
                                    userAutopooldata?.child[2]?.child[2]?.user_id
                                  }
                                />
                              </li>
                            )}
                          </ul>
                        )}
                      </li>
                    )}
                  </ul>
                )}
              </li>
            </ul>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default AutopoolTree;
