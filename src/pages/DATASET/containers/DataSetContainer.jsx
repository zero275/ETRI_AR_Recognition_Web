import Container from "@/components/container";
import React, { useEffect, useState } from "react";

const DataSetContainer = () => {
  const [fileName, setFileName] = useState();
  return (
    <main className="mainContainer">
      <div className="containers">
        <Container title="데이터 정보 읽어오기" addedCls="flex5">
          <div>
            <div className="inner_dataset">
              <div className="dataset_group">
                <p>그룹</p>
                <select name="" id="">
                  <option value="site">site</option>
                  <option value="site">ETRI</option>
                </select>
              </div>
              {/* <div className="dataset_group">
                <p>디렉토리</p>
                <input type="file" className="select_file" />
              </div> */}
              <div className="dataset_group">
                <input
                  class="upload-name"
                  value={fileName === null ? null : fileName}
                  placeholder="첨부파일"
                />
                <label for="file">파일찾기</label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => {
                    console.log("file_name", e.target.files);
                    console.log("file_name2", e.target.files[0].name);
                    let fileName = e.target.files[0].name;
                    setFileName(fileName);
                  }}
                />
              </div>
            </div>
          </div>
        </Container>
        <Container addedCls="flex7" cls="basicContainer2nd">
          <div></div>
        </Container>
      </div>
    </main>
  );
};

export default DataSetContainer;
