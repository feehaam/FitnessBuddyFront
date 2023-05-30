import React, { PureComponent } from 'react';
import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line, LineChart } from 'recharts';
import styles from '../Graphical/PieView.module.css'
import PieItem from "./PieItem"
import { useTheme } from "@mui/material";

function MultilineView({ title, data, description, colors}) {

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
                            <Line
                                type="monotone"
                                dataKey="protein"
                                stroke="#8884d8"
                                activeDot={{ r: 8 }}
                            />
                            <Line
                                type="monotone"
                                dataKey="fat"
                                stroke="#ff66ff"
                                activeDot={{ r: 8 }}
                            />
                            <Line type="monotone" dataKey="carbohydrate" stroke="#82ca9d" />
                        </LineChart>
                    </div>
                    <div className={styles.title}>
                        {title}
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', alignContent: 'justify' }}>
                    {data.map((entry, index) => (
                        <PieItem
                            key={`cell-${index}`}
                            entry={{
                                'name': entry.name,
                                'value': entry.carbohydrate+"+"+entry.protein+"+"+entry.fat
                            }}
                            color={mode === 'dark' ? 'black' : 'white'}
                            bgcolor={colors[index]}
                        />
                    ))}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MultilineView;

{/* <MultilineView title={'Calories from carbohydrate, protein and fat'} data={weeklyCPF} colors={randomColorArray(weeklyCPF.length, graphColor)} description={type + ' view of your daily intake calories from carbohydrate, protein and fat. Each block of the graph shows 3 bars presenting 3 different amount of nutritions you ate a day.'} />
         */}