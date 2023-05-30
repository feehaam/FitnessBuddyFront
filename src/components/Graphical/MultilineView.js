import React, { PureComponent } from 'react';
import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line, LineChart } from 'recharts';
import styles from '../Graphical/PieView.module.css'
import PieItem from "./PieItem"
import { useTheme } from "@mui/material";

function MultilineView({ title, data, description, colors, key1, key2, key3 }) {

    const theme = useTheme();
    const mode = theme.palette.mode;

    return (
        <div>
            <div className={styles.container}>
                <div className={styles.description}>
                    {description}
                </div>
                <div className={styles.innercont}>
                    <div className={styles.visual}>
                        <LineChart width={250} height={250} data={data}>
                            <CartesianGrid strokeDasharray="2 2" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            {key2 !== null ?
                                <Line
                                    type="monotone"
                                    dataKey={key2}
                                    stroke="#8884d8"
                                    activeDot={{ r: 8 }}
                                /> : ""};
                            {key3 !== null ?
                                <Line
                                    type="monotone"
                                    dataKey={key3}
                                    stroke="#ff66ff"
                                    activeDot={{ r: 8 }}
                                /> : ""};
                            <Line type="monotone" dataKey={key1} stroke="#82ca9d" />
                        </LineChart>
                    </div>
                    <div className={styles.title}>
                        {title}
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', alignContent: 'justify' }}>
                        {key2 == null ?
                            data.map((entry, index) => (
                                <PieItem
                                    key={`cell-${index}`}
                                    entry={{
                                        'name': entry.name,
                                        'value': entry.calories
                                    }}
                                    color={mode === 'dark' ? 'black' : 'white'}
                                    bgcolor={colors[index]}
                                />
                            ))
                            :
                            key3 == null ?
                                data.map((entry, index) => (
                                    <PieItem
                                        key={`cell-${index}`}
                                        entry={{
                                            'name': entry.name,
                                            'value': entry.A + "+" + entry.B
                                        }}
                                        color={mode === 'dark' ? 'black' : 'white'}
                                        bgcolor={colors[index]}
                                    />
                                ))
                                :
                                data.map((entry, index) => (
                                    <PieItem
                                        key={`cell-${index}`}
                                        entry={{
                                            'name': entry.name,
                                            'value': entry.A + "+" + entry.B + "+" + entry.C
                                        }}
                                        color={mode === 'dark' ? 'black' : 'white'}
                                        bgcolor={colors[index]}
                                    />
                                ))
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MultilineView;

{/* <MultilineView title={'Calories from carbohydrate(A), protein(B) and fat(C)'} data={weeklyCPF} key1={'A'} key2={'B'} key3={'C'} colors={randomColorArray(weeklyCPF.length, graphColor)} description={type + ' view of your daily intake calories from carbohydrate, protein and fat. Each block of the graph shows 3 bars presenting 3 different amount of nutritions you ate a day.'} />*/ }