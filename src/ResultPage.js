import React, { Component } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { fetchResults } from "./actions/resActions";
import { connect } from "react-redux";

class ResultPage extends Component {
    componentDidMount() {
        this.props.fetchResults();
    }
    render() {
        const columns = [
            { field: "id", headerName: "Roll No", width: 100 },
            { field: "name", headerName: "Name", width: 100 },
            { field: "eng", headerName: "English", width: 100, editable: true },
            { field: "maths", headerName: "Maths", width: 100, editable: true },
            { field: "phy", headerName: "Physics", width: 100, editable: true },
            {
                field: "chem",
                headerName: "Chemistry",
                width: 100,
                editable: true,
            },
            {
                field: "total",
                headerName: "total",
                width: 100,
                valueGetter: (params) =>
                    `${
                        parseInt(params.getValue(params.id, "eng")) +
                        parseInt(params.getValue(params.id, "maths")) +
                        parseInt(params.getValue(params.id, "phy")) +
                        parseInt(params.getValue(params.id, "chem"))
                    }`,
            },
            {
                field: "percentage",
                headerName: "Percentage",
                width: 100,
                valueGetter: (params) =>
                    `${params.getValue(params.id, "total") / 4}`,
            },
        ];
        const rows = this.props.results;

        return (
            <div style={{ height: 400, width: "90%", margin: "10px auto" }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    disableSelectionOnClick
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    results: state.results.items,
});

export default connect(mapStateToProps, { fetchResults })(ResultPage);
